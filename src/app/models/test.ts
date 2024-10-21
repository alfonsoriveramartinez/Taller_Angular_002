export interface Productos{
    name:string,
    description:string,
    precio:number,
    img:string,
}

export type Roles = {
    rol:"Admin" | "cliente" | "vendedor" | "Usuario" | "Facturador"
}

export interface Usuario{
    id:number,
    img?:string,
    precio?:string,
    name:string,
    description:string,
    rol:Roles
}