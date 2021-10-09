Medical inventory management


Title : medical inventory management is web based app use to manage and sell inventory of medical store which mainly consist of Authentication, Searching,Billing


Overview: In this product web app is designed so that owners and employees of medical stores can easily manage the workload of selling, buying and maintaining stocks easily. Consider where a company owns multiple medical stores and is required to maintain stock of medicines which are expired or not and sell medicines to customers including billing automation. Customer visits medical store for his or her needs and ask for particular list of medicines which are then process by employees of store to complete request made by customer by searching availability, location of item in shelves etc are done through our web app.






Personas: This products are mainly targets for employees and owners of medical store and not anywhere related to customers of stores


User Scenarios: Product will be used by 2 types of user Owner and employees of the store. 
* Owner/Admin : Owner is like admin for a product. Owner can register a new employee by assigning him/her a username and password for the authentication process or access to the whole web app. Owner can do CRUD operations on employee data. Owner also has access to medicine CRUD operation and all authorities which are given to employees.
* Employees/Users: Employee type of user only can have access to components like searching and billing only when admin or owner provides authentication. Where each employee can use a web app to complete customer requests i.e searching availability of medicines and billing total amount along with printing.


Requirements:


Products requires Database,API,Searching Algorithm,Printing Bill technology
* Database: simple structure database are required to store users, items and orders data with relation within each other
   1. Users Table (Employee and Owner with super status field)
   2. Medicine (detail of each medicine in store)
   3. Order (detail of each order processed)
   4. Company,Buyer and Manufacture are hierarchical to Medicines
   5. Medicines (medicine out of stock)


* API : To Perform CRUD operations on Database and also for Authenticating.
* Billing : It includes creating a cart and async function which make api calls to update the database on completion of order and billing. Billing for medical stores usually requires dotted printing. Hence qz tray technology can be used to communicate with dotted printers.
* Searching algorithm - Searching will be done on the tags of the medicine used while adding a particular medicine & this will be handled using the medicine api with searched query parameters. We will be using a debouncing method to apply search on the UI side.


Note - In case of multiple stores of a particular owner then the same search algorithm will be applied on all the medicine api tables of the respective stores. This will be only accessible to admin users.






Designs:


  
Testing Credentials:
Admin Credentials : 
Username :admin
Password:1234

Employee Credentials:
Username :abdul
Password:1234





Open Issues:
Main issue is communicating with dotted printer due to lack of resources and experience on work of web printing