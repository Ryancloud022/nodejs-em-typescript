import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

export class App {
  private express: express.Application;
  private porta = 9000;

  constructor() {
    this.express = express();
    this.listen(this.porta);
  }

  public getApp(): express.Application {
    return this.express;
  }

  private listen(porta: number) {
    this.express.listen(porta, () => {
      console.log('Servidor iniciando na porta ' + this.porta);
    });
  }
}
