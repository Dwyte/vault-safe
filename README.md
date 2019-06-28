# VaultSafe

A glorified TodoApp with encryption trickery. Instead of storing the data in plain text
the data is encrypted on the client side before it's sent to the server. Kinda like a
password manager (kinda).

**How it works:**  
The user is required to input two fields: **Username** and **Password**  
These Datas are then derived from these two fields.  
**userHash:**  
 `SHA256(username);`  
(Used for verifying if a user already registered with the same username)  
**auth:**  
 `SHA256(username + password);`  
(Used as an authentication to fetch the encrypted vault on the database)  
**vaultKey:**  
 `SHA256(auth + password);`  
(Used as the key for encrypting & decrypting the vault, this is not sent to the server)  
**vault**   
 `AES.encrypt(data, vaultKey)`  
(An encrypted sample data that is sent to the server and saved onto the database)


**Loging in,** auth, vaultKey and vault is saved locally.  
**When the user updates the data**, it gets encrypted on the client before it's sent to the server.  
**Logging out**, formats the localStorage.  