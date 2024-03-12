import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

export class App {
  private express: express.Application;
  private porta = 9000;

  constructor() {
    this.express = express();
    this.listen(this.porta);
    this.database();
  }

  public getApp(): express.Application {
    return this.express;
  }

  private listen(porta: number) {
    this.express.listen(porta, () => {
      console.log('Servidor iniciando na porta ' + this.porta);
    }); 
  }
    
  private database(): void {
    mongoose.connect('mongodb+srv://ryanpedrozacloud:0eZMx4knmxZe3ZpY@cluster0.hjlaeig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Conexão com o banco de dados estabelecida com sucesso.");
    })
    .catch(error => {
      console.error("Erro ao conectar ao banco de dados:", error);
    });
  }
  }
