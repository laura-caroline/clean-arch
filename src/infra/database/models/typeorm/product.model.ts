import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CustomerEntity } from './customer.model';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @ManyToOne(() => CustomerEntity, (customer) => customer.products)
  customer: CustomerEntity;
}
