import React from "react";
import {
  ShieldCheck,
  Award,
  Globe,
  BriefcaseMedical,
  ArrowRight,
} from "lucide-react";

export default function AboutUsPage() {
  const leaders = [
    {
      name: "Dr. Elena Rodriguez",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
      desc: "With over 25 years of experience in healthcare administration, Dr. Rodriguez has been the driving force behind HealthPulse’s digital transformation.",
      large: true,
    },
    {
      name: "Dr. James Chen",
      role: "Chief Medical Officer",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Sarah Thompson",
      role: "Director of Operations",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Dr. Marcus Vane",
      role: "Head of Research",
      image:
        "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const awards = [
    {
      title: "HealthCare Excellence",
      subtitle: "National Gold Award 2023",
      icon: <Award size={22} />,
    },
    {
      title: "Patient Safety Award",
      subtitle: "Safety Foundation Certified",
      icon: <ShieldCheck size={22} />,
    },
    {
      title: "AI Innovation Hub",
      subtitle: "MedTech Journal Winner",
      icon: <BriefcaseMedical size={22} />,
    },
    {
      title: "Sustainability Star",
      subtitle: "Global Green Hospital",
      icon: <Globe size={22} />,
    },
  ];

  return (
    <div className="bg-[#eef1f6] min-h-screen text-[#0b1e4b]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-[#dfe6ff] text-[#0b2f8a] px-4 py-2 rounded-full text-sm font-medium">
            Our Mission
          </span>

          <h1 className="mt-6 text-5xl leading-tight font-bold text-[#082c8c]">
            Elevating Human Care
            <br />
            Through Precision.
          </h1>

          <p className="mt-6 text-gray-600 leading-8 max-w-xl">
            At HealthPulse, we blend cutting-edge medical technology with a
            deeply human approach. Our mission is to provide immediate
            reliability and empathetic care to every patient, every time.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-[#0b2f8a] text-white px-7 py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all">
              Meet Our Team
            </button>

            <button className="border border-[#0b2f8a] text-[#0b2f8a] px-7 py-4 rounded-xl font-medium">
              Our Values
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden border-[6px] border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1400&auto=format&fit=crop"
              alt="Doctors"
              className="w-full h-[550px] object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4">
            <div className="bg-green-600 text-white p-3 rounded-full">
              <ShieldCheck size={20} />
            </div>

            <div>
              <p className="font-semibold text-sm">JCI Accredited</p>
              <p className="text-xs text-gray-500">
                Global Standard of Care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#f5f7fb] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#082c8c]">
            A Legacy of Innovation
          </h2>

          <p className="text-gray-500 mt-4">
            Transforming the landscape of healthcare since 1985.
          </p>

          <div className="relative mt-20">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-[#0b2f8a]/20 -translate-x-1/2" />

            <div className="space-y-20">
              {[
                {
                  year: "85",
                  title: "Foundation",
                  desc: "HealthPulse was established as a small community clinic with a vision for integrated patient data management.",
                },
                {
                  year: "02",
                  title: "Expansion",
                  desc: "Opened our central multi-specialty hospital, introducing the region’s first fully digital records system.",
                },
                {
                  year: "18",
                  title: "AI Integration",
                  desc: "Pioneered diagnostic assistance using advanced AI models, reducing patient waiting times by 40%.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-10 items-center relative ${
                    index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="text-right pr-10">
                    <h3 className="text-2xl font-bold text-[#0b2f8a]">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-3 leading-7">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pl-10" />

                  <div className="absolute left-1/2 -translate-x-1/2 bg-[#0b2f8a] text-white w-14 h-14 rounded-full flex items-center justify-center font-bold shadow-lg">
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-bold text-[#082c8c]">
              Visionary Leadership
            </h2>

            <p className="text-gray-500 mt-3">
              Guided by industry experts and medical pioneers.
            </p>
          </div>

          <button className="flex items-center gap-2 text-[#0b2f8a] font-medium">
            View All Directors <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large Card */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden h-[420px]">
            <img
              src={leaders[0].image}
              alt={leaders[0].name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />

            <div className="absolute bottom-8 left-8 text-white max-w-lg">
              <p className="text-sm opacity-80">{leaders[0].role}</p>

              <h3 className="text-4xl font-bold mt-2">{leaders[0].name}</h3>

              <p className="mt-4 text-sm leading-7 opacity-90">
                {leaders[0].desc}
              </p>
            </div>
          </div>

          {/* Side Card */}
          <div className="relative rounded-3xl overflow-hidden h-[420px]">
            <img
              src={leaders[1].image}
              alt={leaders[1].name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-80">{leaders[1].role}</p>

              <h3 className="text-3xl font-bold mt-2">{leaders[1].name}</h3>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="relative rounded-3xl overflow-hidden h-[320px]">
            <img
              src={leaders[2].image}
              alt={leaders[2].name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-80">{leaders[2].role}</p>

              <h3 className="text-3xl font-bold mt-2">{leaders[2].name}</h3>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-[#0b56c7] rounded-3xl text-white p-10 flex flex-col justify-center">
            <h3 className="text-6xl font-bold">500+</h3>

            <p className="uppercase tracking-widest mt-2 text-sm opacity-90">
              Expert Physicians
            </p>

            <div className="w-full h-px bg-white/20 my-8" />

            <h3 className="text-5xl font-bold">15</h3>

            <p className="uppercase tracking-widest mt-2 text-sm opacity-90">
              Specialized Departments
            </p>
          </div>

          {/* Bottom Right */}
          <div className="relative rounded-3xl overflow-hidden h-[320px]">
            <img
              src={leaders[3].image}
              alt={leaders[3].name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-80">{leaders[3].role}</p>

              <h3 className="text-3xl font-bold mt-2">{leaders[3].name}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-[#f5f7fb] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#082c8c]">
            Recognized Excellence
          </h2>

          <p className="text-gray-500 mt-4">
            Consistently ranked among the top 1% of hospitals nationwide.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-[#eef3ff] text-[#0b2f8a] flex items-center justify-center mx-auto">
                  {award.icon}
                </div>

                <h3 className="mt-6 font-bold text-lg">{award.title}</h3>

                <p className="text-sm text-gray-500 mt-2">
                  {award.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}