import multiprocessing

bind = '127.0.0.1:8001'
workers = multiprocessing.cpu_count()
user = 'chat'
max_requests = 500
threads = 1
proc_name = 'chat_backend'
env = 'LANG="en_US.utf8"'