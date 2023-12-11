'use client'

import { useSearchParams } from 'next/navigation';
import Form from '../components/form';
import { ITask } from '@/types/tasks';

export default function AddTask() {
  const searchParams = useSearchParams()

  const search: ITask = {
    id: searchParams.get('id')!, 
    title: searchParams.get('title')!, 
    description: searchParams.get('description')!,
    tag: searchParams.get('tag')!
  }

  return (
    <>
      {search.id ? <Form method="PUT" task={search} /> : <Form method="POST" />}
    </>
  );
}
