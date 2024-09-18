/**
 * @description                     Logout procedure. Removes :
 *                                  -"username" token
 *                                  -"JWT" token
 * 
 * @returns                         URL Redirection (/ page)
 */

export default function Logout() {
    sessionStorage.removeItem("username") 
    sessionStorage.removeItem("token") 
    // alert("Déconnexion")
    window.location.href = "/";
}
