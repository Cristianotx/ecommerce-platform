import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto, CreateUserSchema, UpdateUserSchema } from '@ecommerce-platform/auth/models';
import { User } from './user.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User as CurrentUser } from '../auth/decorators/user.decorator';
import { ZodValidationPipe } from 'nestjs-zod';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll(@CurrentUser('companyId') companyId: string): Promise<User[]> {
    return this.userService.findAll(companyId);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Post()
  async create(
    @Body(new ZodValidationPipe(CreateUserSchema)) dto: CreateUserDto, 
    @CurrentUser('companyId') companyId: string): Promise<User> {
    return this.userService.create(dto, companyId);
  }

  @Put(':id')
  update(
    @Param('id') id: string, 
    @Body(new ZodValidationPipe(UpdateUserSchema)) dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
