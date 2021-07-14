import { Controller, Body, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { CategoryPropertyService } from './categoryProperty.service';
import { categoryProperty, Company as CompanyModel } from '@prisma/client';
import { CreateCategoryPropertyDto } from './dto/create-categoryProperty.dto';

@Controller('category')
export class CategoryPropertyController {
    constructor(
        private categoryPropertyService: CategoryPropertyService,
    ) { }

    @Get()
    getAllNews(): Promise<categoryProperty[]> {
        return this.categoryPropertyService.getAllCategory();
    }

    @Get('/:id')
    getNewsById(@Param('id') id: string): Promise<categoryProperty> {
        return this.categoryPropertyService.getCategoryById({ id });
    }

    @Post('/:id')
    async createProject(@Body() data: CreateCategoryPropertyDto, @Param('id') id: string): Promise<any> {
        return this.categoryPropertyService.createCategoryProperty(data, id);
    }

    @Put(':id')
    async updateCompanyById(
        @Param('id') id: string,
        @Body() payload: CreateCategoryPropertyDto,
    ): Promise<categoryProperty> {
        return await this.categoryPropertyService.updateCategory({ where: { id }, data: payload });
    }

    @Delete('/:id')
    async deleteCompany(@Param('id') id: string): Promise<categoryProperty> {
        return this.categoryPropertyService.deleteCategory({ id });
    }


}