import Header from "../components/header/header";

const Contacts = () => {
    return ( 
    <>
    <Header />
    <main class="section">
        <div class="container">
            <h1 class="title-1">Contacts</h1>


                <ul class="content-list">
                    <li class="content-list__item">
                        <h2 class="title-2">Location</h2>
                        <p>XXXXXXX</p>

                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">Telegram/Whatsapp/viber</h2>
                        <p>XXXXXXX</p>

                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">Email</h2>
                        <p><a href="mailto:webdev@gmail.com">XXXXXXX</a></p>

                    </li>
                </ul>
        </div>
    </main> 
    </>
);
}
 
export default Contacts;