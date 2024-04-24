import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Product } from "./Product"
import { ProductCategory } from "./ProductCategory"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @OneToMany(() => ProductCategory, (product_cat) => product_cat.user_created)
    product_cat: ProductCategory[]

    @OneToMany(() => Product, (product) => product.user_created)
    product: Product[]

}


