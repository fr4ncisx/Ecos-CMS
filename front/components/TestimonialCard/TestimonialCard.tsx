
export default function TestimonialCard ({testimonial}: any ){
return(
    <div className="border rounded-xl bg-white p-4 shadow-sm w-72">
    <div className="flex items-center gap-3">
      <img
        src={testimonial.image}
        className="w-10 h-10 rounded-full"
        alt="user"
      />
      <div>
        <h3 className="font-semibold">{testimonial.name}</h3>
        <p className="text-sm text-teal-600">{testimonial.category}</p>
      </div>
    </div>

    <p className="text-sm text-gray-700 mt-3 line-clamp-3">
      "{testimonial.text}"
    </p>
      <p className="text-sm text-gray-500 mt-3">Nombre: {testimonial.author}</p>
      <p className="text-sm text-gray-500 mt-3">Rol: {testimonial.role}</p>
      <p className="text-sm text-gray-500 mt-3">Descripcion: {testimonial.content}</p>
  </div>
    
);
}



