import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class OnlineBanking extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://lisa.ru/images/cache/2017/2/21/fit_960_530_false_crop_1385_1000_0_0_71632_f77c34053c.jpeg"
                style={{height: '200px'}}
                 />
            </div>


            <h2 style={{paddingTop: '2em'}}>Интернет-банкинг</h2>
            <h4 style={{color: 'grey'}}>Информационная система</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Cозданная для оказания услуг обмена документами в электронном виде и дистанционного банковского обслуживания Клиентов на условиях договора (в рамках соответствующих договоров и соглашений, заключенных сторонами), реализуемых посредством  защищенного электронного документооборота.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
              <h2>Возможности</h2>
              <Skills
                  skill="Открыть депозит"
                  progress={20}
              />
              <Skills
                  skill="Отправлять и получать переводы"
                  progress={40}
              />
              <Skills
                  skill="Оплачивать коммунальные услуги"
                  progress={60}
              />
              <Skills
                  skill="Управлять своим счетом, не выходя из дома"
                  progress={80}
              />
              <Skills
                  skill="Контролировать свои расходы"
                  progress={100}
              />
              <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Подробнее</h2>

              <Education serviceName={'работа с расчетными счетами'}/>
              <Education serviceName={'работа с депозитами, в том числе открытие нового депозитного продукта'}/>
              <Education serviceName={'работа с кредитами'}/>
              <Education serviceName={'работа с карт-счетами, в том числе открытие нового карточного продукта'}/>
              <Education serviceName={'клиринг и гросс платежи'}/>
              <Education serviceName={'создание SWIFT платежей'}/>
              <Education serviceName={'создание шаблонных операций'}/>
              <Education serviceName={'автоплатежи'}/>
              <Education serviceName={' получать выписки по счетам и информацию о текущем состоянии счета через SMS и e-mail'}/>
              <Education serviceName={'Осуществление безналичных платежей: клиринг, гросс, SWIFT'}/>
              <Education serviceName={'Внутрибанковские переводы'}/>
              <Education serviceName={'Конвертация валют'}/>
              <Education serviceName={'Просмотр выписок по счету и сохранение в PDF'}/>
              <Education serviceName={'Возможность открытия депозита (только для тех клиентов, у которых уже есть расчетный счет)'}/>
              <Education serviceName={'Пополнение депозита'}/>
              <Education serviceName={'Выписка по депозитному счету'}/>
              <Education serviceName={'Все виды погашений с расчетного счета: текущее, частичное, досрочное, полное погашашение'}/>
              <Education serviceName={'Просмотр графика погашений'}/>
              <Education serviceName={'Просмотр всей информации по кредитным счетам, включая транши и выписки'}/>
              <Education serviceName={'Пополнение карт-счетов'}/>
              <Education serviceName={'Перевод  с карты на карту'}/>
              <Education serviceName={'Просмотр выписки по краточным счетам'}/>
              <Education serviceName={'Личный кабинет'}/>
              <Education serviceName={'Прием и отправка сообщений в банк'}/>
              <Education serviceName={'Отображение новостей банка'}/>


                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Дополнительная информация</h2>

            <Experience
              firstInfo={"Банк сегодня"}
              secondInfo={"Открытое акционерное общество «Дос-Кредобанк» действует на рынке банковских услуг более 20 лет.\n" +
              "\n" +
              "Учредители и акционеры Банка – юридические и физические лица, резиденты Кыргызской Республики. " +
              "Деятельность Банка подтверждена Генеральной лицензией НБ КР № 037." +
              "Постоянно обеспечивается соблюдение всех экономических нормативов и обязательных резервных требований, устанавливаемых Национальным банком Кыргызкой Республики. Финансовая устойчивость и стабильность Банка ежегодно подтверждается проверками внешних независимых аудиторских фирм.\n" +
              "\n" +
              "С каждым годом внедряются все новые банковские технологии и разработки, тем самым расширяется ассортимент услуг, увеличивается клиентская база."}
              />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default OnlineBanking;
