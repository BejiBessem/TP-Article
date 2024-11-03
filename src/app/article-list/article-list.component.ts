import { Component } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
    articles: any[] = [
      {
        Title: 'Pizza ',
        Photo: 'https://img.freepik.com/premium-photo/pizza-with-lot-vegetables-it_862330-1849.jpg',
        date: new Date().toISOString().split('T')[0], 
        Description: 'Deliciously cheesy pizza topped with fresh ingredients and a crispy crust, perfect for satisfying cravings',
        Score: 0
      },
      {
        Title: 'BMW XM',
        Photo: 'https://wallpapercave.com/wp/wp12010558.jpg',
        date: new Date().toISOString().split('T')[0], 
        Description: 'The BMW XM combines luxury and high-performance with a bold, sporty design, featuring a powerful hybrid engine and advanced tech for an exhilarating drive.',
        Score: 0
      }
    ];
    filteredArticles: any[] = [...this.articles];
    newArticle = {
      Title: '',
      Photo: '',
      date: '',
      Description: '',
      Score: 0
    };
    searchTerm: string = '';
    showForm: boolean = false;
    showList: boolean = true;
  
    toggleForm() {
      this.showForm = !this.showForm;
      if (this.showForm) {
        this.showList = false;
      }
    }
  
    addArticle() {
      this.articles.push({ ...this.newArticle, date: new Date().toISOString().split('T')[0], Score: 0 });
      this.newArticle = {
        Title: '',
        Photo: '',
        date: '',
        Description: '',
        Score: 0
      };
      this.filterArticles();
    }
  
    increaseScore(article: any) {
      article.Score += 1;
      this.sortArticles();
    }
  
    decreaseScore(article: any) {
      if (article.Score > 0) {
        article.Score -= 1;
      }
      this.sortArticles();
    }
  
    search() {
      this.filterArticles();
    }
  
    filterArticles() {
      if (this.searchTerm.trim()) {
        this.filteredArticles = this.articles.filter(article =>
          article.Title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        this.filteredArticles = [...this.articles];
      }
      this.sortArticles();
    }
  
    sortArticles() {
      this.filteredArticles.sort((a, b) => b.Score - a.Score);
    }
  }
  