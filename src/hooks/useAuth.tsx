import {User} from '../types/User'

export const useAuth =   (user:User) => {

    const isAdmin = user.role==='ADMIN'
    const isOfficer= user.role==='OFFICER'

    return {
        isAdmin,
        isOfficer
    };
}