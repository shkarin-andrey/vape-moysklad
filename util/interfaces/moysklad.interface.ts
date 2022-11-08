export interface IMoySkladMonth {
  margin: number;
  profit: number;
  sum: number;
}

export interface IMoySklad {
  month0: IMoySkladMonth;
  month1: IMoySkladMonth;
  month2: IMoySkladMonth;
  month3: IMoySkladMonth;
  month4: IMoySkladMonth;
  month5: IMoySkladMonth;
  name: string;
}

export interface IMoySkladProps {
  data: IMoySklad[];
  totalSum: number;
}
