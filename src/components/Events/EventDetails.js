import React from 'react';
import Information from '../Profile/Information';
import EventForm from './EventForm';


const EventDetails = () => {
    return (
        <div className="container my-3">
            <div className="card">
                <img className="img-fluid card-img-top" src={'https://preview.colorlib.com/theme/eventz/assets/img/hero/h1_hero.png'} alt="" />
                <div className="card-body">
                    <h3 className="card-title">CONFERENCE 2021</h3>
                    <p> <strong>20-23 January 2021 - Los Angeles CA</strong> </p>
                </div>

                <p className=" px-3 pt-2 card-text">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolor repellendus officia accusamus debitis aperiam, fuga sit nemo deleniti ipsam facilis eius. At excepturi ex error qui facere aliquam fugit. Culpa rem asperiores, accusantium unde similique necessitatibus molestiae voluptate dolorem veritatis vitae enim illum vero dolor cumque esse non quod optio rerum saepe. Inventore consequuntur, quaerat, recusandae autem optio molestias quo blanditiis numquam error quas libero, eveniet nemo, dolor neque. Assumenda, nulla aliquid hic impedit delectus dolore porro, accusantium illo odio unde commodi temporibus. Ipsam explicabo soluta, officia dolor exercitationem eos laudantium ex doloribus neque deserunt quasi quos cupiditate minima quas consequatur incidunt consectetur aut amet quod, qui labore facilis, non? Ducimus voluptas ipsam sequi dicta neque, nemo hic iure maiores! Sapiente, reiciendis vitae ipsam? Atque maiores porro, sequi aperiam repudiandae voluptates dolores neque officiis non omnis, tempora. Iusto dolor officiis voluptatem ab laboriosam magni, aut, illum, blanditiis nam dolorem quo? Quisquam, consequuntur earum, eaque, omnis temporibus pariatur minima odio reprehenderit repudiandae ab perspiciatis ducimus ea laudantium aut beatae. Excepturi, suscipit reiciendis ratione vitae doloribus assumenda quis, est ex similique mollitia eaque officiis natus libero in veritatis, officia quo, nihil. Maiores nemo vitae soluta commodi veritatis asperiores minus quaerat dolorem. </p>
                <hr/>
                <EventForm />
            </div>
        </div>
    );
};

export default EventDetails;