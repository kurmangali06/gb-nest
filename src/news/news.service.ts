import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './create.user.dto';

export interface News {
  id?: number;
  title: string;
  description: string;
  author: string;
  countView?: number;
}
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

@Injectable()
export class NewsService {
  private readonly news: News[] = [
    {
      id: 1,
      title: 'Наша первая новость',
      description: 'описания новости',
      author: 'Курмангали',
      countView: 12,
    },
  ];
  getAllNews() {
    return this.news;
  }

  find(id: News['id']): News | undefined {
    return this.news.find((news) => news.id === id);
  }

  create(news: CreateNewsDto): News {
    const newId = getRandomInt(0, 10000);
    const newNews = {
      ...news,
      id: newId,
    } as any as News;
    this.news.push(newNews);
    return newNews;
  }

  remove(id: number): boolean {
    const IndexRemoveNews = this.news.findIndex((news) => news.id === id);
    if (IndexRemoveNews !== -1) {
      this.news.slice(IndexRemoveNews, 1);
      return true;
    }

    return false;
  }
}
