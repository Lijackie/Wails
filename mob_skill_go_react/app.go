package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"log"

	"gopkg.in/yaml.v3"
)

// App struct
type App struct {
	ctx context.Context
}

type Item struct {
	Body []interface{} `yaml:"Body"`
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) GetMobDb() *Item {
	item := Item{}

	file, err := ioutil.ReadFile("mob_db.yml")
	if err != nil {
		//log.Fatal(err)
		log.Printf("讀取失敗 #%v", err)
	}

	err = yaml.Unmarshal(file, &item)
	if err != nil {
		//log.Fatalf("error: %v", err)
		log.Printf("讀取失敗 #%v", err)
	}
	// fmt.Printf("--- t:\n%v\n\n", item)

	return &item
}

func (a *App) GetSkillDb() *Item {
	item := Item{}

	file, err := ioutil.ReadFile("skill_db.yml")
	if err != nil {
		//log.Fatal(err)
		log.Printf("讀取失敗 #%v", err)
	}

	err = yaml.Unmarshal(file, &item)
	if err != nil {
		//log.Fatalf("error: %v", err)
		log.Printf("讀取失敗 #%v", err)
	}
	// fmt.Printf("--- t:\n%v\n\n", item)

	return &item
}