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
	// Id string
	// AegisName string
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

func (a *App) GetItemEquipDb() *Item {
	item := Item{}

	file, err := ioutil.ReadFile("item_db_equip.yml")
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

	// d, err := yaml.Marshal(&item)
	// if err != nil {
	// 		log.Fatalf("error: %v", err)
	// }
	// fmt.Printf("--- t dump:\n%s\n\n", string(d))

	// for _, element := range item.Body {
    //     //fmt.Println("Key:", key, "=>", "Element:", element)
	// 	for key2, elelement2 := range element.(map[string]interface{}) {
	// 		fmt.Println("Key:", key2, "=>", "Element:", elelement2)
	// 	}
    // }

	return &item
}

func (a *App) GetItemEtcDb() *Item {
	item := Item{}

	file, err := ioutil.ReadFile("item_db_etc.yml")
	if err != nil {
		//log.Fatal(err)
		log.Printf("讀取失敗 #%v", err)
	}

	err = yaml.Unmarshal(file, &item)
	if err != nil {
		//log.Fatalf("error: %v", err)
		log.Printf("讀取失敗 #%v", err)
	}

	return &item
}

func (a *App) GetItemUsableDb() *Item {
	item := Item{}

	file, err := ioutil.ReadFile("item_db_usable.yml")
	if err != nil {
		//log.Fatal(err)
		log.Printf("讀取失敗 #%v", err)
	}

	err = yaml.Unmarshal(file, &item)
	if err != nil {
		//log.Fatalf("error: %v", err)
		log.Printf("讀取失敗 #%v", err)
	}

	return &item
}