package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func CheckError(err error) {
	if err != nil {
		panic(err)
	}
}

func viewHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	psqlconn := os.Getenv("DB_HOST")

	db, err := sql.Open("postgres", psqlconn)

	CheckError(err)

	rows, e := db.Query(`select * from profile`)

	for rows.Next() {
		var id int
		var username string
		var info string
		err = rows.Scan(&id, &username, &info)
		CheckError(err)
		fmt.Println(username)
	}

	CheckError(e)

	// close database
	defer db.Close()
	http.HandleFunc("/view/", viewHandler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
