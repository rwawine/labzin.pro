export interface IJob {
  id: string;
  title: string;
  date: string;
  responsibilities: string[];
  requirements: string[];
  conditions: string[];
}

export interface IJobListingProps {
  job: IJob;
  isOpen: boolean;
  onToggle: () => void;
} 