import { nanoid } from 'nanoid';
import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('developers')
export class Developer {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthday: string;

  @BeforeInsert()
  generateId() {
    this.id = `dev_${nanoid()}`;
  }
}
