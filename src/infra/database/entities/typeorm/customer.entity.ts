import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity()
export class CustomerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @OneToMany(() => ProductEntity, (product) => product.customer)
  products: ProductEntity[];
}
