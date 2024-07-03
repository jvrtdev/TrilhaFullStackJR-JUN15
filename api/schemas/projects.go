package schemas

import (
	"gorm.io/gorm"
)

type Projects struct {
	gorm.Model
	Project_id  int
	Name        string
	Description string
	Card_img    string
	Owner_id    int
}

