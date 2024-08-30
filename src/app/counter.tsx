'use server';

import { cookies } from 'next/headers';

export async function counter(formData: FormData) {
  if (formData.get('action') === 'increment') await changeCount('inc');
  else await changeCount('dec');
}

export async function changeCount(action: 'inc' | 'dec') {
  const count = await getCount();
  const newCount = action === 'inc' ? count + 1 : count - 1;
  cookies().set('count', newCount.toString(), {
    httpOnly: true,
  });
}

export async function getCount() {
  return parseInt(cookies().get('count')?.value || '0');
}
