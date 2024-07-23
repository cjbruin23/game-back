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

var db *sql.DB

func CheckError(err error) {
	if err != nil {
		panic(err)
	}
}

func userHandler(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query(`select * from profile`)
	CheckError(err)

	for rows.Next() {
		var id int
		var username string
		var info string
		err := rows.Scan(&id, &username, &info)
		CheckError(err)
		fmt.Println(username)
	}
	fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	psqlconn := os.Getenv("DB_HOST")

	db, err = sql.Open("postgres", psqlconn)

	CheckError(err)

	// close database
	defer db.Close()
	http.HandleFunc("/user/", userHandler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
