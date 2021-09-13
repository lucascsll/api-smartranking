import { Injectable } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criarJogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JogadoresService {
  private jogadores: Jogador[] = [];
  async create(criarJogadorDto: CriarJogadorDto): Promise<void> {
    const { nome, email, telefoneCelular } = criarJogadorDto;
    const jogador: Jogador = {
      _id: uuidv4(),
      nome: nome,
      telefoneCelular: telefoneCelular,
      email: email,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: 'www.s3aws.com/teste.jpg',
    };
    this.jogadores.push(jogador);
  }

  async list(): Promise<Jogador[]> {
    return this.jogadores;
  }
}
