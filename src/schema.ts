import * as yup from "yup";

const emailPasswordschema = yup.object().shape({
    email: yup
      .string()
      .required('Email is a required field')
      .email('Invalid email address'),
    password: yup
      .string()
      .required('Password is a required field')
      .min(6, 'Password must be at least 6 characters long'),
  });

  const Pritaclerschema = yup.object().shape({
    nom: yup.string()
    .required('Le Nom est obligatoire')
    .min(2, 'Le Nom doit avoir au moins 2 caractères')
    .max(50, 'Le Nom ne doit pas dépasser 50 caractères')
    .matches(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le Nom doit contenir uniquement des lettres, des espaces, des tirets et des apostrophes'),
  prenom: yup.string()
    .required('Le Prénom est obligatoire')
    .min(2, 'Le Prénom doit avoir au moins 2 caractères')
    .max(50, 'Le Prénom ne doit pas dépasser 50 caractères')
    .matches(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le Prénom doit contenir uniquement des lettres, des espaces, des tirets et des apostrophes'),
    adressePostale: yup.string()
    .required('L\'Adresse postale est obligatoire')
    .max(255, 'L\'Adresse postale ne doit pas dépasser 255 caractères')
    .matches(/^[\w\s\d',-]+$/, 'L\'Adresse postale doit contenir uniquement des lettres, des chiffres, des espaces et des caractères spéciaux (,\'-)'),
    numeroTelephone: yup.string().matches(/^[0-9]+$/, 'Le Numéro de téléphone doit contenir uniquement des chiffres')
    .required('Le Numéro de téléphone est obligatoire').min(10, 'Le Numéro de téléphone doit avoir au moins 10 chiffres').max(15, 'Le Numéro de téléphone ne doit pas dépasser 15 chiffres'),
    email: yup.string().email('Adresse E-mail invalide')
    .required('L\'Adresse E-mail est obligatoire')
    .max(255, 'L\'Adresse E-mail ne doit pas dépasser 255 caractères'),
    checkboxField: yup.boolean().oneOf([true], 'La case à cocher est obligatoire'),
  });
  const associationschema = yup.object().shape({
    association_nom: yup.string()
    .required('Le Nom est obligatoire')
    .min(2, 'Le Nom doit avoir au moins 2 caractères')
    .max(50, 'Le Nom ne doit pas dépasser 50 caractères')
    .matches(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le Nom doit contenir uniquement des lettres, des espaces, des tirets et des apostrophes'),
    adressePostale: yup.string()
    .required('L\'Adresse postale est obligatoire')
    .max(255, 'L\'Adresse postale ne doit pas dépasser 255 caractères')
    .matches(/^[\w\s\d',-]+$/, 'L\'Adresse postale doit contenir uniquement des lettres, des chiffres, des espaces et des caractères spéciaux (,\'-)'),
    numeroTelephone: yup.string().matches(/^[0-9]+$/, 'Le Numéro de téléphone doit contenir uniquement des chiffres')
    .required('Le Numéro de téléphone est obligatoire').min(10, 'Le Numéro de téléphone doit avoir au moins 10 chiffres').max(15, 'Le Numéro de téléphone ne doit pas dépasser 15 chiffres'),
    email: yup.string().email('Adresse E-mail invalide')
    .required('L\'Adresse E-mail est obligatoire')
    .max(255, 'L\'Adresse E-mail ne doit pas dépasser 255 caractères'),
  });
  const Iterpriceschema = yup.object().shape({
    nom: yup.string()
    .required('Le Nom est obligatoire')
    .min(2, 'Le Nom doit avoir au moins 2 caractères')
    .max(50, 'Le Nom ne doit pas dépasser 50 caractères')
    .matches(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le Nom doit contenir uniquement des lettres, des espaces, des tirets et des apostrophes'),
  prenom: yup.string()
    .required('Le Prénom est obligatoire')
    .min(2, 'Le Prénom doit avoir au moins 2 caractères')
    .max(50, 'Le Prénom ne doit pas dépasser 50 caractères')
    .matches(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le Prénom doit contenir uniquement des lettres, des espaces, des tirets et des apostrophes'),
  nomCommercial: yup.string()
    .min(2, 'Le Nom commercial doit avoir au moins 2 caractères')
    .max(50, 'Le Nom commercial ne doit pas dépasser 50 caractères')
    .matches(/^[a-zA-ZÀ-ÿ\s\d',-]+$/, 'Le Nom commercial doit contenir uniquement des lettres, chiffres, espaces et caractères spéciaux (,\'-)'),
    metier: yup.string().min(2, 'Le Métier doit avoir au moins 2 caractères').
    max(50, 'Le Métier ne doit pas dépasser 50 caractères')
    .matches(/^[a-zA-ZÀ-ÿ\s-]+$/, 'Le Métier doit contenir uniquement des lettres, espaces et tirets'),
    adressePostale: yup.string()
    .required('L\'Adresse postale est obligatoire')
    .max(255, 'L\'Adresse postale ne doit pas dépasser 255 caractères')
    .matches(/^[\w\s\d',-]+$/, 'L\'Adresse postale doit contenir uniquement des lettres, des chiffres, des espaces et des caractères spéciaux (,\'-)'),
    numeroTelephone: yup.string().matches(/^[0-9]+$/, 'Le Numéro de téléphone doit contenir uniquement des chiffres')
    .required('Le Numéro de téléphone est obligatoire').min(10, 'Le Numéro de téléphone doit avoir au moins 10 chiffres').max(15, 'Le Numéro de téléphone ne doit pas dépasser 15 chiffres'),
    email: yup.string().email('Adresse E-mail invalide')
    .required('L\'Adresse E-mail est obligatoire')
    .max(255, 'L\'Adresse E-mail ne doit pas dépasser 255 caractères'),
  });
export {
    emailPasswordschema,
    Pritaclerschema,
    associationschema,
    Iterpriceschema
}