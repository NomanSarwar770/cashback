import { ref } from 'vue'

export function CentralizedData() {
  return {
    cashback: ref([
      { store: 'Walmart', rate: '3.2%' },
      { store: 'Walmart 10061', rate: 'Up to 2.5%' },
      { store: 'Walmart 10069', rate: 'Up to 2.5%' },
    ]),
    travelMiles: ref([{ store: 'Walmart', rate: '1 mi./$' }]),
    creditCardPoints: ref([{ store: 'Walmart', rate: '1 pt./$' }]),
    otherRewardPoints: ref([{ store: 'Walmart', rate: '0.5%' }]),
  }
}
