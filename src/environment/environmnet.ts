export const environmnet: any = {

    authenticationApi : {
        url: "http://restapi.adequateshop.com/api/",
        path: {
            register: 'authaccount/registration',
            login: 'authaccount/login'
        }
    },

    usersList: {
        url: 'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
        path: {
            getUser: '',
            addUser: '',
        }
      
    }
}