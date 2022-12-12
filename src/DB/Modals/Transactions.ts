import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm/browser';
  
  @Entity('transaction')
  export class Transaction {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    hash: string;
  
    @Column()
    timestamp: number;
  

    @Column()
    chainId: number;
    // @OneToMany((type: any) => Post, (post) => post.author)
    // posts: Post[];
  }