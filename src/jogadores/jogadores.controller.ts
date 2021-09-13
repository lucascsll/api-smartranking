import { Body, Controller, Post, Get } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criarJogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post()
  async create(@Body() criarJogadorDto: CriarJogadorDto) {
    await this.jogadoresService.create(criarJogadorDto);
  }

  @Get()
  async findAll(): Promise<Jogador[]> {
    return await this.jogadoresService.list();
  }
}
