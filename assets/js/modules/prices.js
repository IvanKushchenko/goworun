import Vue from 'vue';
import AppPrices from '../components/AppPrices.vue';
const el = document.querySelector("#app-prices");
const AppPricesInstance = el ? new Vue({
	el: el,
	render: h => h(AppPrices, {
		props: {
			prices: [
        		{
        			icon: 'cubes',
        			title: 'Для детей',
        			subtitle: '(5 - 17 лет)',
        			activeDurationIndex: 0,
        			duration: [
        				{
        					value: 45,
        					name: '45 мин',
        					content: '<ul><li>в группе 4-6 человек</li><li>2 занятия в неделю</li><li>78 часов занятий за год</li></ul>'
        				},
        				{
        					value: 60,
        					name: '60 мин',
        					content: '<ul><li>в группе 4-6 человек</li><li>2 занятия в неделю</li><li>104 часов занятий за год</li></ul>' 
        				}
        			],
        			prices: [
        				{
	        				value: 4400,
	        				duration: 45,
	        				title: 'руб/мес',
	        				info: '',
	        				meta: ''
	        			},
	        			{
	        				value: 5200,
	        				duration: 60,
	        				title: 'руб/мес',
	        				info: '',
	        				meta: ''
	        			}
        			]
        		},
        		{
        			icon: 'briefcase',
        			title: 'Для взрослых',
        			subtitle: '(18+ лет)',
        			activeCommunicationTypeIndex: 0,
        			online: {
        				activeDurationIndex: 0,
        				duration: [
	        				{
	        					value: 60,
	        					name: '60 мин',
	        					content: '<ul><li>в группе 4-6 человек</li><li>1 занятия в неделю</li><li>104 часов занятий за год</li></ul>' 
	        				},
	        				{
	        					value: 90,
	        					name: '90 мин',
	        					content: '<ul><li>в группе 4-6 человек</li><li>2 занятия в неделю</li><li>156 часов занятий за год</li></ul>' 
	        				},
	        				{
	        					value: 135,
	        					name: '135 мин',
	        					content: '<ul><li>в группе 4-6 человек</li><li>1 занятие в неделю</li><li>117 часов занятий за год</li></ul>' 
	        				}
	        			],
	        			prices: [
	        				{
		        				value: 4800,
		        				duration: 60,
		        				title: 'руб/мес',
		        				info: '',
		        				meta: ''
		        			},
		        			{
		        				value: 6800,
		        				duration: 90,
		        				title: 'руб/мес',
		        				info: '',
		        				meta: ''
		        			},
		        			{
		        				value: 4800,
		        				duration: 135,
		        				title: 'руб/мес',
		        				info: '',
		        				meta: ''
		        			}
	        			]
        			},
        			offline: {
        				activeDurationIndex: 0,
        				duration: [
	        				{
	        					value: 60,
	        					name: '60 мин',
	        					content: '<ul><li>в группе 4-6 человек</li><li>1 занятия в неделю</li><li>104 часов занятий за год</li></ul>' 
	        				},
	        				{
	        					value: 90,
	        					name: '90 мин',
	        					content: '<ul><li>в группе 4-6 человек</li><li>2 занятия в неделю</li><li>156 часов занятий за год</li></ul>' 
	        				},
	        				{
	        					value: 135,
	        					name: '135 мин',
	        					content: '<ul><li>в группе 4-6 человек</li><li>1 занятие в неделю</li><li>117 часов занятий за год</li></ul>' 
	        				}
	        			],
	        			prices: [
	        				{
		        				value: 5200,
		        				duration: 60,
		        				title: 'руб/мес',
		        				info: '',
		        				meta: ''
		        			},
		        			{
		        				value: 7200,
		        				duration: 90,
		        				title: 'руб/мес',
		        				info: '',
		        				meta: ''
		        			},
		        			{
		        				value: 5200,
		        				duration: 135,
		        				title: 'руб/мес',
		        				info: '',
		        				meta: ''
		        			}
	        			]
        			}
        			
        		},
        		{
        			icon: 'mini-group',
        			title: 'Мини-группа',
        			subtitle: '(из 2 человек)',
        			activeCommunicationTypeIndex: 0,
        			online: {
        				activeDurationIndex: 0,
        				duration: [
	        				{
	        					value: 45,
	        					name: '45 мин',
	        					content: '<ul><li>в группе 2 человека</li></ul>' 
	        				},
	        				{
	        					value: 60,
	        					name: '90 мин',
	        					content: '<ul><li>в группе 2 человека</li></ul>' 
	        				},
	        				{
	        					value: 90,
	        					name: '90 мин',
	        					content: '<ul><li>в группе 2 человека</li></ul>' 
	        				}
	        			],
	        			prices: [
	        				{
		        				value: 1000,
		        				duration: 45,
		        				title: 'руб/занятие',
		        				info: 'Если на занятие пришел 1 человек, он оплачивает стоимость индивидуального занятия',
		        				meta: 'стоимость указана за 1 человека'
		        			},
		        			{
		        				value: 1200,
		        				duration: 60,
		        				title: 'руб/занятие',
		        				info: 'Если на занятие пришел 1 человек, он оплачивает стоимость индивидуального занятия',
		        				meta: 'стоимость указана за 1 человека'
		        			},
		        			{
		        				value: 1400,
		        				duration: 90,
		        				title: 'руб/занятие',
		        				info: 'Если на занятие пришел 1 человек, он оплачивает стоимость индивидуального занятия',
		        				meta: 'стоимость указана за 1 человека'
		        			}
	        			]
        			},
        			offline: {
        				activeDurationIndex: 0,
        				duration: [
	        				{
	        					value: 45,
	        					name: '45 мин',
	        					content: '<ul><li>в группе 2 человека</li></ul>' 
	        				},
	        				{
	        					value: 60,
	        					name: '90 мин',
	        					content: '<ul><li>в группе 2 человека</li></ul>' 
	        				},
	        				{
	        					value: 90,
	        					name: '90 мин',
	        					content: '<ul><li>в группе 2 человека</li></ul>' 
	        				}
	        			],
	        			prices: [
	        				{
		        				value: 1200,
		        				duration: 45,
		        				title: 'руб/занятие',
		        				info: 'Если на занятие пришел 1 человек, он оплачивает стоимость индивидуального занятия',
		        				meta: 'стоимость указана за 1 человека'
		        			},
		        			{
		        				value: 1400,
		        				duration: 60,
		        				title: 'руб/занятие',
		        				info: 'Если на занятие пришел 1 человек, он оплачивает стоимость индивидуального занятия',
		        				meta: 'стоимость указана за 1 человека'
		        			},
		        			{
		        				value: 1600,
		        				duration: 90,
		        				title: 'руб/занятие',
		        				info: 'Если на занятие пришел 1 человек, он оплачивает стоимость индивидуального занятия',
		        				meta: 'стоимость указана за 1 человека'
		        			}
	        			]
        			}
        		},
        		{
        			icon: 'individual',
        			title: 'Индивидуальные занятия',
        			subtitle: '',
        			activeCommunicationTypeIndex: 0,
        			online: {
        				activeDurationIndex: 0,
        				duration: [
	        				{
	        					value: 60,
	        					name: '60 мин',
	        					content: 'Время и дни индивидуальных занятий оговариваются с преподавателями. Все занятия проводятся только у нас в офисе либо онлайн. Выезд на дом не осуществляется.' 
	        				},
	        				{
	        					value: 90,
	        					name: '90 мин',
	        					content: 'Время и дни индивидуальных занятий оговариваются с преподавателями. Все занятия проводятся только у нас в офисе либо онлайн. Выезд на дом не осуществляется.' 
	        				}
	        			],
	        			prices: [
	        				{
		        				value: 1200,
		        				duration: 60,
		        				title: 'руб/занятие',
		        				info: '',
		        				meta: ''
		        			},
		        			{
		        				value: 1800,
		        				duration: 90,
		        				title: 'руб/занятие',
		        				info: '',
		        				meta: ''
		        			}
	        			]
        			},
        			offline: {
        				activeDurationIndex: 0,
        				duration: [
        					{
	        					value: 45,
	        					name: '45 мин',
	        					content: 'Время и дни индивидуальных занятий оговариваются с преподавателями. Все занятия проводятся только у нас в офисе либо онлайн. Выезд на дом не осуществляется.' 
	        				},
	        				{
	        					value: 60,
	        					name: '60 мин',
	        					content: 'Время и дни индивидуальных занятий оговариваются с преподавателями. Все занятия проводятся только у нас в офисе либо онлайн. Выезд на дом не осуществляется.' 
	        				},
	        				{
	        					value: 90,
	        					name: '90 мин',
	        					content: 'Время и дни индивидуальных занятий оговариваются с преподавателями. Все занятия проводятся только у нас в офисе либо онлайн. Выезд на дом не осуществляется.' 
	        				}
	        			],
	        			prices: [
	        				{
		        				value: 1500,
		        				duration: 45,
		        				title: 'руб/занятие',
		        				info: '',
		        				meta: ''
		        			},
		        			{
		        				value: 1700,
		        				duration: 60,
		        				title: 'руб/занятие',
		        				info: '',
		        				meta: ''
		        			},
		        			{
		        				value: 2300,
		        				duration: 90,
		        				title: 'руб/занятие',
		        				info: '',
		        				meta: ''
		        			}
	        			]
        			}
        		},
        		{
        			icon: 'man',
        			title: 'Разговорный английский клуб с носителем языка',
        			subtitle: '',
        			activeDurationIndex: 0,
        			duration: [
        				{
        					value: 60,
        					name: '60 мин',
        					content: '' 
        				}
        			],
        			prices: [
        				{
	        				value: 800,
	        				duration: 60,
	        				title: 'руб/занятие',
	        				info: '',
	        				meta: ''
	        			}
        			]
        		},
        	]
		}
	})
}) : null;
export default AppPricesInstance;