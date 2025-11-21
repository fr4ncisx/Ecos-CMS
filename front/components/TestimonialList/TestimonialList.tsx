import { testimonialsMock } from "@/data/testimonials";
import TestimonialCard from "../TestimonialCard/TestimonialCard"


export default function TestimonialList() {
  return (
    <section className="px-8 mb-16">
      <h2 className="text-xl font-semibold mb-4">Testimonios recientes</h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {testimonialsMock.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </section>
  );
}