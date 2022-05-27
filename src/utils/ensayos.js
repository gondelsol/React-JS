const ensayos = [
    {
        id: 1,
        name: "Azucar Fermentable",
        category: 'Basic',
        resumen: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, omnis.',
        stock: 7,
        precio: 10.7,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eum, facere est accusamus quia sunt? Reiciendis deserunt cum unde adipisci consectetur eum voluptatibus quis incidunt quia aspernatur. Quo beatae laudantium et nobis incidunt sunt molestiae, corrupti cupiditate consequatur ut id. Quo dolore deleniti, perferendis quis sunt blanditiis temporibus veniam quasi nostrum voluptates aut ipsam numquam voluptate porro ex accusantium asperiores doloremque necessitatibus quidem incidunt beatae exercitationem praesentium nesciunt. Expedita facere est sed molestias ut, quasi doloremque libero numquam recusandae fugit obcaecati maxime cumque quia totam quisquam voluptate esse incidunt? Ex pariatur saepe voluptas velit amet aliquam blanditiis omnis atque repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea velit deleniti dolorem quaerat! Earum facilis quia sint ut alias, velit doloribus tempore inventore quo repellat quibusdam, rerum temporibus id harum facere quos neque explicabo laboriosam.",
        image: "https://gastronomiaycia.republica.com/wp-content/uploads/2017/08/ava_winery_1-680x451.jpg"
        
    },
    {
        id: 2,
        name: "Dióxido de azufre libre",
        category: 'Basic',
        resumen: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ipsa repellat.',
        stock: 23,
        precio: 10.7,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsum porro, ut ad omnis velit officia in atque suscipit ducimus cupiditate sed nostrum vel aliquid magni nesciunt consectetur quas nam neque sint. Officia, veniam sit rem incidunt dolorum facere id, cum unde, ut quos quaerat est aut eligendi eum quod ipsam dolore minima voluptatibus assumenda porro delectus non maiores distinctio. Culpa delectus, nesciunt eos laudantium sint harum beatae consequuntur minus itaque error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia est eius nam id deleniti odit, voluptate tenetur sit fuga eos obcaecati ab minima cumque quam ullam necessitatibus sunt impedit rem repellat vero incidunt assumenda dolor quia repudiandae? Tenetur, omnis aperiam.",
        image: "https://media.istockphoto.com/photos/wines-laboratory-with-traditional-and-modern-apparatus-picture-id1177830896"
    },
        {
        id: 3,
        name: "Acidez volátil",
        category: 'Basic',
        resumen: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, qui?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero tempore beatae voluptas a nam sapiente, blanditiis inventore totam! Iure tempora hic ipsum obcaecati fugit commodi? Culpa nihil, laborum a laboriosam dolore, ab quisquam saepe magni earum in veritatis voluptatem facilis necessitatibus totam hic reprehenderit tempora amet et officia optio. Deleniti quos illo similique fuga. Aperiam ut obcaecati praesentium cupiditate id dolores quod earum deleniti tempore molestias, dolore tempora consectetur architecto ea ad error cumque explicabo rerum quis maxime? Excepturi, magnam velit.',
        stock: 23,
        precio: 17,
        image: "https://c8.alamy.com/compes/f35tk6/laboratorio-de-analisis-de-la-elaboracion-del-vino-f35tk6.jpg"
    },
        {
        id: 4,
        name: "Acidez Total",
        category: 'Basic',
        resumen: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sunt dolor numquam!',
        stock: 6,
        precio: 45,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea illum cumque sequi aut, mollitia veniam inventore veritatis temporibus. Animi distinctio eligendi voluptatem vel beatae adipisci dolore saepe iste recusandae doloribus. Possimus odit consequatur voluptate aperiam velit enim architecto est molestiae nam? Qui iste, est quas vitae dicta asperiores quae pariatur debitis quisquam, possimus illo id dolorum dolores tempore consequatur reprehenderit. Ad iste ratione animi delectus rem, ducimus repellat commodi, veniam aliquam aliquid magnam culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatibus, quasi possimus, eaque deleniti minus sed animi, reprehenderit amet cupiditate veniam. Quos delectus voluptate blanditiis mollitia necessitatibus culpa labore.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIeiZlziuMiv_2gQ7nvKZkqXwkLwsP-qlNQ&usqp=CAU"
    },
        {
        id: 5,
        name: "Ácido L-Láctico",
        category: 'Basic',
        resumen: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis?',
        stock: 23,
        precio: 74,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi in sint deleniti aut placeat nisi itaque, eum eos ipsa hic accusamus numquam esse dolorem dolore tempora cum, quod laborum explicabo deserunt porro ex repudiandae quasi illo. Distinctio amet harum odio quod, quisquam illo cumque doloribus quam! Illum, dolor nostrum sunt, asperiores necessitatibus, ex neque assumenda sequi consequatur minus obcaecati ipsa molestias alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia vel ipsa distinctio perspiciatis commodi quasi reiciendis necessitatibus aspernatur? Molestias, excepturi temporibus deleniti hic similique, dolorum earum beatae doloribus impedit et enim!",
        image:"https://static.larioja.com/lomejordelvinoderioja/multimedia/202005/16/media/cortadas/dolmar-kU8C--984x468@La%20Rioja.jpg"
    },
        {
        id: 6,
        name: "Ácido L-Máctico",
        category: 'Basic',
        resumen: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, voluptatibus?',
        stock: 33,
        precio: 16,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem veritatis? Laborum eius reprehenderit excepturi, porro ullam ipsa, necessitatibus cumque culpa dolorem molestiae rem provident perferendis a et, distinctio minus earum corporis. Praesentium tempore aliquam animi est laudantium voluptates minima accusantium perferendis, distinctio ipsam assumenda deserunt similique vitae at placeat, ea consequuntur nam quis? Ipsa cumque voluptate eius rerum quam temporibus beatae quaerat laudantium enim earum inventore qui sunt, itaque iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nesciunt recusandae incidunt minima animi alias sint necessitatibus atque, pariatur voluptatem corporis nam voluptatum soluta omnis dolor, mollitia minus tenetur! Dignissimos sunt veniam ea.",
        image:"https://www.vinetur.com/imagenes/2016/marzo/21/vino_ciencia_investigacion.jpg"
    },
    {
        id: 7,
        name: "Dióxido de Azufre Total",
        category: 'Basic',
        resumen: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, natus quaerat quasi eligendi non earum?',
        stock: 12,
        precio: 83,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione amet maiores error molestiae, numquam exercitationem quisquam quas quaerat? Porro provident velit autem culpa obcaecati eos blanditiis maxime ipsum quas temporibus atque corporis qui tempore dignissimos placeat praesentium quis, nemo impedit? Porro nisi sunt corporis. Necessitatibus molestias iure exercitationem dolorem porro, delectus consequuntur omnis ad quia? Dolorem quod, nesciunt cumque voluptatem dolorum in sequi ex veniam aperiam incidunt rem fuga doloribus esse, nulla minima ducimus consequuntur eveniet natus! Impedit incidunt sequi dolorem minus quo provident? Dolorem voluptatem perspiciatis ipsam odio. Nam dicta consequuntur dolores, sequi cumque officiis sit voluptas consectetur fugiat nulla commodi adipisci.",
        image:"https://previews.123rf.com/images/jackf/jackf1610/jackf161003981/64918778-gros-plan-sur-les-mains-de-tester-le-vin-dans-un-laboratoire-chimique.jpg"
    },
    {
        id: 8,
        name: "Alcohol",
        category: 'Basic',
        resumen: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum. Excepturi, vitae perspiciatis?',
        stock: 33,
        precio: 178,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptate a. Voluptatum mollitia aperiam earum iste. Atque aut amet inventore. Saepe ipsa incidunt, inventore accusantium dolorem odio similique sunt nulla illum, aliquid aperiam vel quibusdam beatae voluptatem enim cum qui, illo eius facere quam fuga molestiae minima! Neque quas repudiandae cupiditate deserunt ipsum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque amet exercitationem incidunt. Ullam labore tenetur maiores incidunt velit dolore veritatis obcaecati consequuntur molestias modi quaerat fugit ratione optio sit laborum molestiae, quos, dignissimos vitae doloribus eveniet. Dolor numquam sint ad culpa!",
        image:"https://estaticos-cdn.prensaiberica.es/clip/b141879d-4925-4258-82a9-f98736bb1a8f_16-9-aspect-ratio_default_0.jpg"
    },
    {
        id: 9,
        name: 'İndice Total Polifenoles (IPT)',
        category: 'Phenolic',
        resumen: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum. Excepturi, vitae perspiciatis?',
        stock: 37,
        precio: 56,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptate a. Voluptatum mollitia aperiam earum iste. Atque aut amet inventore. Saepe ipsa incidunt, inventore accusantium dolorem odio similique sunt nulla illum, aliquid aperiam vel quibusdam beatae voluptatem enim cum qui, illo eius facere quam fuga molestiae minima! Neque quas repudiandae cupiditate deserunt ipsum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque amet exercitationem incidunt. Ullam labore tenetur maiores incidunt velit dolore veritatis obcaecati consequuntur molestias modi quaerat fugit ratione optio sit laborum molestiae, quos, dignissimos vitae doloribus eveniet. Dolor numquam sint ad culpa!",
        image:"https://www.monografias.com/trabajos100/clarificacion-del-vino-agentes-clarificacion/image001.jpg"
    },
    {
        id: 10,
        name: 'Antocianos Totales',
        category: 'Phenolic',
        resumen: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum. Excepturi, vitae perspiciatis?',
        stock: 42,
        precio: 110.7,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptate a. Voluptatum mollitia aperiam earum iste. Atque aut amet inventore. Saepe ipsa incidunt, inventore accusantium dolorem odio similique sunt nulla illum, aliquid aperiam vel quibusdam beatae voluptatem enim cum qui, illo eius facere quam fuga molestiae minima! Neque quas repudiandae cupiditate deserunt ipsum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque amet exercitationem incidunt. Ullam labore tenetur maiores incidunt velit dolore veritatis obcaecati consequuntur molestias modi quaerat fugit ratione optio sit laborum molestiae, quos, dignissimos vitae doloribus eveniet. Dolor numquam sint ad culpa!",
        image:"https://c8.alamy.com/compes/wr4h08/vino-en-tubos-de-ensayo-en-laboratorio-wr4h08.jpg"
    },
    {
        id: 11,
        name: 'Antocianos en las Uvas',
        category: 'Phenolic',
        resumen: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum. Excepturi, vitae perspiciatis?',
        stock: 62,
        precio: 152.3,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptate a. Voluptatum mollitia aperiam earum iste. Atque aut amet inventore. Saepe ipsa incidunt, inventore accusantium dolorem odio similique sunt nulla illum, aliquid aperiam vel quibusdam beatae voluptatem enim cum qui, illo eius facere quam fuga molestiae minima! Neque quas repudiandae cupiditate deserunt ipsum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque amet exercitationem incidunt. Ullam labore tenetur maiores incidunt velit dolore veritatis obcaecati consequuntur molestias modi quaerat fugit ratione optio sit laborum molestiae, quos, dignissimos vitae doloribus eveniet. Dolor numquam sint ad culpa!",
        image:"https://www.vinetur.com/imagenes/2020/febrero/3/3_laboratorios_dolmar_interior.jpg"
    },
    {
        id: 12,
        name: 'Polifenoles totales',
        category: 'Phenolic',
        resumen: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum. Excepturi, vitae perspiciatis?',
        stock: 33,
        precio: 10.7,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptate a. Voluptatum mollitia aperiam earum iste. Atque aut amet inventore. Saepe ipsa incidunt, inventore accusantium dolorem odio similique sunt nulla illum, aliquid aperiam vel quibusdam beatae voluptatem enim cum qui, illo eius facere quam fuga molestiae minima! Neque quas repudiandae cupiditate deserunt ipsum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque amet exercitationem incidunt. Ullam labore tenetur maiores incidunt velit dolore veritatis obcaecati consequuntur molestias modi quaerat fugit ratione optio sit laborum molestiae, quos, dignissimos vitae doloribus eveniet. Dolor numquam sint ad culpa!",
        image:"https://staticmer2.emol.cl/Fotos/2012/08/14/file_20120814170748.jpg"
    },
    {
        id: 13,
        name: 'Índice de HCl',
        category: 'Phenolic',
        resumen: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste dolores reprehenderit.',
        stock: 33,
        precio: 10.7,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptate a. Voluptatum mollitia aperiam earum iste. Atque aut amet inventore. Saepe ipsa incidunt, inventore accusantium dolorem odio similique sunt nulla illum, aliquid aperiam vel quibusdam beatae voluptatem enim cum qui, illo eius facere quam fuga molestiae minima! Neque quas repudiandae cupiditate deserunt ipsum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque amet exercitationem incidunt. Ullam labore tenetur maiores incidunt velit dolore veritatis obcaecati consequuntur molestias modi quaerat fugit ratione optio sit laborum molestiae, quos, dignissimos vitae doloribus eveniet. Dolor numquam sint ad culpa!",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_HK3felUjYBDKA4M7WPNWc9ip2pXtQAVOA&usqp=CAU"
    },

];

module.exports = {
    ensayos,
}