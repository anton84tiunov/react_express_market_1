import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { ProductCategory } from "./ProductCategory";
import { User } from "./User";

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    name: string

    @ManyToOne(() => ProductCategory, (product_cat)  => product_cat.product)
    @JoinColumn({ name: "category_id" }) // Имя столбца, в который будет сохранен внешний ключ
    category: ProductCategory;

    @ManyToOne(() => User, (user)  => user.product)
    @JoinColumn({ name: "user_id" }) // Имя столбца, в который будет сохранен внешний ключ
    user_created: User;

    @Column()
    price: number

    @Column()
    description: string

    @Column()
    created_at: Date
  
}






