'use client';

import { useEffect, useState } from 'react';
import { getSubmissions } from './actions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { logout } from '../login/actions';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

interface Submission {
  id: string;
  name: string;
  email: string;
  message: string;
  submittedAt: Date;
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchSubmissions() {
      try {
        const result = await getSubmissions();
        if (result.success && result.data) {
          setSubmissions(result.data);
        } else {
          setError(result.error || 'Failed to fetch submissions.');
          if (result.error === 'Authentication required.') {
              router.push('/admin/login');
          }
        }
      } catch (err) {
        setError('An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    }
    fetchSubmissions();
  }, [router]);
  
  const handleLogout = async () => {
    await logout();
    router.push('/admin/login');
  };

  const renderSkeleton = () => (
    [...Array(5)].map((_, i) => (
      <TableRow key={i}>
        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
        <TableCell><Skeleton className="h-4 w-32" /></TableCell>
        <TableCell><Skeleton className="h-4 w-48" /></TableCell>
        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
      </TableRow>
    ))
  );

  return (
    <div className="min-h-screen bg-muted/40 p-4 sm:p-8">
      <div className="mx-auto max-w-7xl">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Contact Form Submissions</CardTitle>
            <Button onClick={handleLogout} variant="outline">Logout</Button>
          </CardHeader>
          <CardContent>
            {error && <p className="text-destructive text-center p-4">{error}</p>}
            {!error && (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Submitted At</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      renderSkeleton()
                    ) : submissions.length > 0 ? (
                      submissions.map(submission => (
                        <TableRow key={submission.id}>
                          <TableCell className="font-medium">{submission.name}</TableCell>
                          <TableCell>{submission.email}</TableCell>
                          <TableCell className="max-w-xs truncate">{submission.message}</TableCell>
                          <TableCell>
                            {format(new Date(submission.submittedAt), "PPP p")}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center">
                          No submissions yet.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
