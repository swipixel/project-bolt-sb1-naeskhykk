import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail } from 'lucide-react';
import ScrollAnimation from './ScrollAnimations';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation submitted:', formData);
  };

  return (
    <section id="reservation" className="py-20 bg-rich-black-2 parallax-fast">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ecru mb-4 text-shadow">Asztal Foglalása</h2>
            <p className="text-xl text-ecru/80 max-w-2xl mx-auto">
              Biztosítsd helyedet a Tisza legszebb panorámájával
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <ScrollAnimation animation="fade-in-left" delay={200}>
            <div className="glass-panel rounded-lg p-8">
            <h3 className="text-2xl font-bold text-ecru mb-6">Foglalási Adatok</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-ecru/80 text-sm font-medium mb-2">
                  Név *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 glass-panel border border-reseda-green/30 rounded-lg text-ecru placeholder-ecru/50 focus:border-reseda-green focus:outline-none transition-all duration-300"
                  placeholder="Teljes név"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-ecru/80 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-reseda-green w-5 h-5 icon-float" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 glass-panel border border-reseda-green/30 rounded-lg text-ecru placeholder-ecru/50 focus:border-reseda-green focus:outline-none transition-all duration-300"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-ecru/80 text-sm font-medium mb-2">
                    Telefon *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-reseda-green w-5 h-5 icon-pulse" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 glass-panel border border-reseda-green/30 rounded-lg text-ecru placeholder-ecru/50 focus:border-reseda-green focus:outline-none transition-all duration-300"
                      placeholder="+36 30 123 4567"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="date" className="block text-ecru/80 text-sm font-medium mb-2">
                    Dátum *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-reseda-green w-5 h-5 icon-rotate" />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 glass-panel border border-reseda-green/30 rounded-lg text-ecru focus:border-reseda-green focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-ecru/80 text-sm font-medium mb-2">
                    Időpont *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-reseda-green w-5 h-5 icon-float" />
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 glass-panel border border-reseda-green/30 rounded-lg text-ecru focus:border-reseda-green focus:outline-none transition-all duration-300"
                    >
                      <option value="">Válassz</option>
                      <option value="17:00">17:00</option>
                      <option value="17:30">17:30</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-ecru/80 text-sm font-medium mb-2">
                    Vendégek *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-reseda-green w-5 h-5 icon-pulse" />
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 glass-panel border border-reseda-green/30 rounded-lg text-ecru focus:border-reseda-green focus:outline-none transition-all duration-300"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num.toString()}>{num} fő</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-reseda-green text-rich-black font-bold rounded-lg btn-pulse hover:bg-ecru"
              >
                Foglalás elküldése
              </button>
            </form>
            </div>
          </ScrollAnimation>

          {/* Contact Info */}
          <div className="space-y-8">
            <ScrollAnimation animation="fade-in-right" delay={300}>
              <div className="glass-panel glass-panel-hover rounded-lg p-8">
              <h3 className="text-2xl font-bold text-ecru mb-6">Kapcsolat</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-reseda-green w-5 h-5 icon-pulse" />
                  <span className="text-ecru">+36 62 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-reseda-green w-5 h-5 icon-float" />
                  <span className="text-ecru">info@gardensteg.hu</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="text-reseda-green w-5 h-5 mt-1 icon-rotate" />
                  <div className="text-ecru">
                    <p className="font-medium mb-1">Nyitvatartás:</p>
                    <p className="text-sm text-ecru/70">Hétfő - Csütörtök: 16:00 - 24:00</p>
                    <p className="text-sm text-ecru/70">Péntek - Szombat: 16:00 - 02:00</p>
                    <p className="text-sm text-ecru/70">Vasárnap: 16:00 - 23:00</p>
                  </div>
                </div>
              </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right" delay={400}>
              <div className="glass-panel glass-panel-hover rounded-lg p-8">
              <h3 className="text-xl font-bold text-ecru mb-4">Fontos tudnivalók</h3>
              <ul className="space-y-2 text-ecru/70 text-sm">
                <li>• Asztal foglalás ajánlott hétvégén</li>
                <li>• Élő zene esetén +500 Ft/fő asztaldíj</li>
                <li>• Törölni legkésőbb 2 órával előbb lehet</li>
                <li>• Háziállat barát környezet</li>
              </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;