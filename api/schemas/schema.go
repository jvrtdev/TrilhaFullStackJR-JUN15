package schemas

import (
	"gorm.io/gorm"
)

// Definição da estrutura Users
type Users struct {
	gorm.Model
	UserID     uint `gorm:"primaryKey"`
	Email      string
	Password   string
	ProfileImg string
	Projects   []Projects       `gorm:"foreignKey:OwnerID"`
	Comments   []CommentsProjects `gorm:"foreignKey:UserID"`
}

// Definição da estrutura Projects
type Projects struct {
	gorm.Model
	ProjectID   uint `gorm:"primaryKey"`
	Name        string
	Description string
	CardImg     string
	OwnerID     uint
	Images      []ProjectsImages `gorm:"foreignKey:ProjectID"`
	Comments    []CommentsProjects `gorm:"foreignKey:ProjectID"`
}

// Definição da estrutura ProjectsImages
type ProjectsImages struct {
	gorm.Model
	ImageID   uint `gorm:"primaryKey"`
	ProjectID uint
	Img       string
}

// Definição da estrutura CommentsProjects
type CommentsProjects struct {
	gorm.Model
	CommentID uint `gorm:"primaryKey"`
	ProjectID uint
	UserID    uint
	Content   string // Adicionado um campo Content para o comentário
}
