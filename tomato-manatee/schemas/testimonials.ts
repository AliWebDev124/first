export default {
    name: 'testiminials',
    title: 'testimonials',
    type:'document',
    fields: [{
        name: 'name',
        title: 'name',
        type : 'string'
    },{
        name: 'company',
        title: 'company',
        type : 'string'
    },{
        name: 'imageurl',
        title: 'ImgURL',
        type : 'image',
        options: {
            hotspot: true
        }
    },{
        name: 'feedback',
        title: 'Feedback',
        type : 'string'
    },]
}