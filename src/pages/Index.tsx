import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Icon name="Eye" size={32} className="text-indigo-600" />
          <span className="text-2xl font-bold text-indigo-900">
            Mystery Shoppers
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Главная
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            О нас
          </a>
          <a
            href="#requirements"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Требования
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Контакты
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge
              variant="secondary"
              className="mb-6 bg-pink-100 text-pink-800 border-pink-200"
            >
              🕵️ Профессиональные тайные покупатели
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Проверим ваш <br />
              бизнес изнутри
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Получите объективную оценку качества обслуживания, работы
              персонала и конкурентных преимуществ через профессиональных тайных
              покупателей
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать проверку
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg"
              >
                <Icon name="Users" size={20} className="mr-2" />
                Стать покупателем
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <div className="relative">
              <img
                src="/img/59689069-d473-4101-85ba-05d850e3a8d1.jpg"
                alt="Профессиональные тайные покупатели"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full opacity-15 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексный анализ вашего бизнеса глазами реального покупателя
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale border-indigo-100 hover:border-indigo-300 transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center">
                <img
                  src="/img/209b16e1-e39c-405e-908d-00fa985a335a.jpg"
                  alt="Проверка качества обслуживания"
                  className="w-32 h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  Проверка качества обслуживания
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Оценка вежливости персонала, скорости обслуживания, знания
                  продукта и готовности помочь клиенту
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-scale border-pink-100 hover:border-pink-300 transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center">
                <img
                  src="/img/d033f10c-59aa-491d-86ef-3ace99f1f28d.jpg"
                  alt="Мониторинг персонала"
                  className="w-32 h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  Мониторинг персонала
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Контроль соблюдения стандартов работы, дресс-кода,
                  корпоративных процедур и клиентского сервиса
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-scale border-purple-100 hover:border-purple-300 transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <img
                  src="/img/cc0714ae-7ee7-44c3-84ee-d4b46a5b67bc.jpg"
                  alt="Анализ конкурентов"
                  className="w-32 h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">
                  Анализ конкурентов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Исследование конкурентной среды, сравнение цен, ассортимента и
                  уровня сервиса у конкурентов
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-indigo-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Сферы деятельности
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Работаем с ведущими компаниями в различных отраслях
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <Card className="h-full border-gray-200 group-hover:border-indigo-300 group-hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                    <Icon
                      name="ShoppingBag"
                      size={32}
                      className="text-indigo-600"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Ретейл
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Магазины, супермаркеты, торговые центры
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="group cursor-pointer">
              <Card className="h-full border-gray-200 group-hover:border-pink-300 group-hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                    <Icon name="Coffee" size={32} className="text-pink-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Рестораны
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Кафе, рестораны, фастфуд, доставка
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="group cursor-pointer">
              <Card className="h-full border-gray-200 group-hover:border-purple-300 group-hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <Icon name="Car" size={32} className="text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Автосалоны
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Продажа авто, сервисные центры
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="group cursor-pointer">
              <Card className="h-full border-gray-200 group-hover:border-green-300 group-hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Icon
                      name="Building"
                      size={32}
                      className="text-green-600"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Банки
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Банки, страховые компании, финуслуги
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={40} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Конфиденциальность
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Полная анонимность проверок и защита данных клиента
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={40} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Профессионализм
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Опытная команда с многолетним стажем в сфере mystery shopping
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" size={40} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Быстрые отчеты
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Детальные отчеты с рекомендациями в течение 24-48 часов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section
        id="requirements"
        className="px-6 py-20 bg-gradient-to-br from-indigo-50 to-pink-50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Требования к тайным покупателям
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Присоединяйтесь к нашей команде профессионалов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-indigo-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <Icon
                    name="User"
                    size={24}
                    className="mr-3 text-indigo-600"
                  />
                  Личные качества
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-gray-700">Возраст от 18 до 65 лет</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-gray-700">
                    Внимательность к деталям
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-gray-700">Коммуникабельность</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-gray-700">Честность и надежность</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-gray-700">Пунктуальность</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <Icon
                    name="Briefcase"
                    size={24}
                    className="mr-3 text-pink-600"
                  />
                  Профессиональные навыки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-gray-700">
                    Грамотная письменная речь
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-gray-700">
                    Опыт работы с клиентами (желательно)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-gray-700">Умение анализировать</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-gray-700">
                    Навыки составления отчетов
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-gray-700">Конфиденциальность</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
            >
              <Icon name="FileText" size={20} className="mr-2" />
              Подать заявку на работу
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Готовы начать работу? Обсудим ваши задачи и подберем оптимальное
            решение
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-indigo-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Телефон</h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-pink-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600">info@mysteryshoppers.ru</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Режим работы
              </h3>
              <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Eye" size={32} className="text-indigo-400" />
            <span className="text-2xl font-bold">Mystery Shoppers</span>
          </div>
          <p className="text-gray-400 mb-6">
            Профессиональные услуги тайных покупателей для вашего бизнеса
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <span>© 2024 Mystery Shoppers</span>
            <span>•</span>
            <span>Политика конфиденциальности</span>
            <span>•</span>
            <span>Условия использования</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
