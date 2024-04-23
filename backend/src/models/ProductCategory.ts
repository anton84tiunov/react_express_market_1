import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { User } from "./User";
import { Product } from "./Product";


@Entity()
export class ProductCategory {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    name: string

    @Column()
    description: string

    @ManyToOne(() => User, (user)  => user.product_cat)
    @JoinColumn({ name: "user_id" }) // Имя столбца, в который будет сохранен внешний ключ
    userr_created: User;

    @OneToMany(() => Product, (product) => product.userr_created)
    product: Product[]

}

