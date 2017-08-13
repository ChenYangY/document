## document

信息收集


### 安装依赖
<code>
# npm install 
</code>

### 安装 pm2
<code>
# npm install pm2 -g
</code>

### 安装mongodb
mongodb [下载地址](https://www.mongodb.com/download-center?ct=false#community)

### mongodb 配置文件
<code>
dbpath=/Users/chenyy/Applications/mongodb_3.4.0/data/db/
logpath=/Users/chenyy/Applications/mongodb_3.4.0/mongod.log
logappend = true
port = 27017
fork = true
auth = true
</code>

###配置mongo用户信息
以下操作需要在非登录模式操作，将配置文件中 auth 设置为false
<pre>
auth=false
</pre> 
#### 创建mongodb角色
<pre>
    <code>
        use resume
        db.createRole({
            role:"tester",
            privileges:[{
                resource:{
                    db:"resume",
                    collection:""
                },
                actions:["AnyAction"]
            }]
        })
    </code>
</pre>
#### 创建mongodb用户

<pre>
    <code>
        use resume
        db.createUser({
            user:"tester",
            pass:"tester",
            roles:[
                {role:"tester",db:"resume"}
            ]
        },{ w: "majority" , wtimeout: 5000 })
    </code>
</pre>


### 运行
<code>
# npm start
</code>


