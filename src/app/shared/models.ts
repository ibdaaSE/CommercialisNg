export interface IArticle {
    idArticle?: number,
    acommander?: number,
    categorie?: String,
    codeBarres?: String,
    depot?: String,
    designation: String,
    expirable: boolean,
    famille?: String,
    inventaire: boolean,
    marque?: String,
    nomtech?: String,
    photo?: Blob,
    pmp?: number,
    prixachat?: number,
    prixpublic?: number,
    prixrevendeur?: number,
    prixspecial?: number,
    qteCarton: number,
    qtemax?: number,
    qtemin?: number,
    qteprevue?: number,
    qtestock?: number,
    reference: String,
    tva?: number,
    unite: String,
    utilise: boolean,
}
export interface ICF {
    idClientFournisseur?: number,
    adress?: String,
    articleimposition?: String,
    bloque?: boolean,
    categorie?: String,
    email?: String,
    fax?: String,
    idfiscale?: String,
    nom?: String,
    photo?: Blob,
    raisonsocial: String,
    registrecommerce?: String,
    remarque?: String,
    solde: number,
    telephone: String
}