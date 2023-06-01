const validation=(data)=>{
    const errors={...data.errors}
    if(!data.username) 
        errors.username='El username no puede estar vacio'
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(data.username)) 
        errors.username='Debe ser un email valido'
    else if (data.username.length>35)
        errors.username='No puede tener mas de 35 caracteres'
    else errors.username=''

    if(data.password.length<6)
        errors.password='Minimo 6 caracteres'
    else if(data.password.length>10)
        errors.password='Maximo 10 caracteres'
    else if (!/\d/.test(data.password))
        errors.password='Debe contener al menos un numero'
    else errors.password=''
    return errors;
}
export default validation;