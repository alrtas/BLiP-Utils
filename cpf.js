function run(){
    var rawCPF = `{{rawCPF}}`
    var size   = rawCPF.length
    var cpf = ''
    for (i=0; i<=size; i++){
        if (rawCPF[i] == undefined) 
            break
        var n = rawCPF[i].charCodeAt()
        if( (n > 57 ) || (n < 48) )
            cpf += rawCPF[i].replace(rawCPF[i],'')
        else
            cpf += rawCPF[i]
    }

    if (cpf.length == 0)
        var valid = false
    else   
        var valid = isValid(cpf)

    return obj = {
        status : valid,
        cpf    : cpf
    }
}


function isValid(cpf) {	

    var dict = {
        '00000000000' : false,
        '11111111111' : false,
        '22222222222' : false,
        '33333333333' : false,
        '44444444444' : false,
        '55555555555' : false,
        '66666666666' : false,
        '77777777777' : false,
        '88888888888' : false,
        '99999999999' : false
    }

    if (dict[cpf] == false)
        return false

    // Valida 1o digito	
    add = 0;	
    for (i=0; i < 9; i ++)		
        add += parseInt(cpf.charAt(i)) * (10 - i);	
        rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)		
            rev = 0;	
        if (rev != parseInt(cpf.charAt(9)))		
            return false;		
    // Valida 2o digito	
    add = 0;	
    for (i = 0; i < 10; i ++)		
        add += parseInt(cpf.charAt(i)) * (11 - i);	
    rev = 11 - (add % 11);	
    if (rev == 10 || rev == 11)	
        rev = 0;	
    if (rev != parseInt(cpf.charAt(10)))
        return false;		
    return true;   
}
