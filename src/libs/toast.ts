import toast from 'react-hot-toast';

export const successToast = (txt: string) =>
	toast.success(txt, { position: 'top-center' });
export const errorToast = (txt: string) =>
	toast.error(txt, { position: 'top-center' });
