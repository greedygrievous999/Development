# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application

This application is an e-commerce shop for records. "Mohawk Records" stocks a mix of underground records that can be filtered by genre, size and sorted by date and price. I designed the thumbnails for products to hide details until hovering to better simulate the experience of shopping for records in-person. When I go into a record store, I typically sort primarily based on the artwork, and only look at the tagged details if I'm intrigued by the artwork. I hope my shop does much of the same thing. 

I decided to use genre and size as my filtering variables. Genre seemed the most natural basis of filtering. Size seemed a relevant filter because not everyone owns a record player that can accomodate 10-inch records (which need a 45 rpm motored turntable). 

Sorting is done by days in stock (default) or by price (both ascending and descending). 

### Usability Principles Considered

In developing my app, I prioritized the following of Nielsen's heuristic usability principles:

    Visibility of system status:
        Hovering displays text information along with an add to cart button, which changes colors and grows upon hovering to indicate action. The colors then flip upon clicking. 

    Match between system and real world:
        See above and below: the shop aims to mimick the flow of shopping for records in the real world. 

    Aesthetic and minimalist design:
        There's little excess text information or color throughout my shop. I aimed to streamline the app as much as possible to make the records the central focus, and to make the artwork as captivating as possible. 

    In terms of accessibility, I kept much of my text information in black with strong font weights. For individual products, hover action reveals text that can be highlighted for different contrast (white text on dark coral) and a bit of zoom. 

### Organization of Components

In designing the shop to recreate shopping in-person, I decided to have cover artwork take up most of the product componets, and to have product components take up most real estate on the front page. When shopping for records in-stores, especially at dance-music record stores like mine, shops prohibit you from re-shelving records yourself (to maintain label/genre organization). For this reason I decided to keep the shopping cart component at the bottom of the page so that users can streamline their shopping exerience. Enter the store, browse the records, check you bag at the end and return any records you don't want, and check out!

In terms of the architecture of my program, I designed a top Navbar myself, added a shipping annoucnement, and then added the shopping container. Inside here is the filter component, and then the products container which contains a map of individual product components. The product components display the image from the data point, and then display text information on hovering. The cart component below is a single contained component that maps the cartContents to stay up to date with actions in other components. The footer below just contains dummy information. 

Its also worth noting that I used styled components over CSS given the size of the project. My primary concern was the number of text containers I would have to use. In order to simplify naming I opted to use styled components. I didn't feel as thoough I was feeling 

### How the User Triggers State Changes

State changes are triggered using onAdd and onRemove methods (defined in the Homepage pages file), which are triggered by clicks on different button components (add to cart button, plus and minus buttons in the cart). These methods find the information of the item which has been clicked on, and then map through the cartItems array, which uses the useState hook. onAdd and onRemove methods update cartItems using setCartItems. 

### How Data is Passed Down Through Components

Data is passed down through components through the use of props. The ProductsCont(ainter) takes in the products list from data.js as a prop, while the CartCompo(nent) takes in cartItems as a prop. These props are mapped to produce complete lists of items. 
