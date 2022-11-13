import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNewsDto } from './create.user.dto';
import { News, NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}
  @Get()
  getNews() {
    return this.newsService.getAllNews();
  }

  @Get('/:id')
  get(@Param('id') id: number) {
    return this.newsService.find(id);
  }

  @Post()
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    const isRemoved = this.newsService.remove(id);

    return isRemoved ? 'Новость удалена' : 'Передан неверный идентификатор';
  }
}
